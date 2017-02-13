from django.views.generic import TemplateView
from django.shortcuts import render 
from react.render import render_component

class ReactView(TemplateView):
    
    template_name = 'react.html'

    props = {
        'rendered': 'server'
    }

    react_component = render_component('js/ReactComponent.js', props=props )

    def get(self, request, *args, **kwargs):            
        
        context = {
            'react_component': self.react_component
        }

        return render(request, self.template_name, context)
