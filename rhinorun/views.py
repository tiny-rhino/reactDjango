from django.views.generic import TemplateView
from django.shortcuts import render 
from react.render import render_component

class ReactView(TemplateView):
	
	template_name = 'react.html'

	rendered = render_component('js/react.js', {})

	print(rendered)

	def get(self, request, *args, **kwargs):			
		context = {
					'rendered': self.rendered
		}

		return render(request, self.template_name, context)
