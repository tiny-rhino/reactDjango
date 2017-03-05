from django.views.generic import TemplateView
from django.shortcuts import render 

class HomeView(TemplateView):
    template_name = 'home.html'

    def get(self, request, *args, **kwargs):            
        context = {}

        return render(request, self.template_name, context)
