module Jekyll

  class ArchiveGenerator < Generator
    safe true

    def generate(site)
        site.tags.keys.each do |tag|
          paginate(site, tag, 'tags', 'tag')
        end
        site.categories.keys.each do |category|
          paginate(site, category, 'categories', 'category')
        end
    end

    def paginate(site, tag, key, label)
      tag_posts = site.posts.docs.find_all {|post| post.data[key].include?(tag)}.sort_by {|post| -post.date.to_f}
      num_pages = TagPager.calculate_pages(tag_posts, site.config['paginate'].to_i)

      (1..num_pages).each do |page|
        pager = TagPager.new(site, page, tag_posts, tag, label, num_pages)
        dir = File.join(key, tag, page > 1 ? "#{page}" : '')
        page = TagPage.new(site, site.source, dir, tag, label)
        page.pager = pager
        site.pages << page
      end
    end
  end

  class TagPage < Page
    def initialize(site, base, dir, tag, label)
      @site = site
      @base = base
      @dir = dir
      @name = 'index.html'

      self.process(@name)
      self.read_yaml(File.join(base, '_layouts'), 'archive.html')
      self.data[label] = tag
    end
  end

  class TagPager < Jekyll::Paginate::Pager 
    attr_reader :tag
    attr_reader :label

    def initialize(site, page, all_posts, tag, label, num_pages = nil)
      @tag = tag
      @label = label
      super site, page, all_posts, num_pages
    end

    alias_method :original_to_liquid, :to_liquid

    def to_liquid
      liquid = original_to_liquid
      liquid[@label] = @tag
      liquid
    end
  end
end