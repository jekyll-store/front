module Liquid
	class ImageTag < Tag
	  def initialize(tag_name, variables, tokens)
		 super
        @variables = variables.split(" ")
        @path = @variables[0]
        @class = @variables[1]
	  end

	  def render(context)
		"<img class='lazy "+ (@class == nil ? "" : @class) +"' data-original='" + context.registers[:site].baseurl + context[@path] + "'>"
	  end
	end
	Liquid::Template.register_tag('img', ImageTag)
end

module Liquid
	class ImagePathTag < Tag
	  def initialize(tag_name, variables, tokens)
		 super
        @variables = variables.split(" ")
        @path = @variables[0]
        @class = @variables[1]
	  end

	  def render(context)
		"<img class='lazy "+ (@class == nil ? "" : @class) +"' data-original='" + context.registers[:site].baseurl + context['baseurl'] + @path + "'>"
	  end
	end
	Liquid::Template.register_tag('img_p', ImagePathTag)
end