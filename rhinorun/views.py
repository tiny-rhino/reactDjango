from django.views.generic import TemplateView
from django.shortcuts import render
from react.render import render_component

class ReactView (TemplateView):
	
	template_name = 'react.html'

	rendered = render_component('../build/src/js/components/react.js', {})

	def get(self, request, *args, **kwargs):

		context = {
			'hello': 'hello world',
			'react': rendered
		}

		return render(request, self.template_name, context)
