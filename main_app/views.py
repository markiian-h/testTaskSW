from django.shortcuts import render


# Create your views here.

def index(request):
    return render(request, 'index.html', {})


def users_detail(request):
    return render(request, 'index.html', {})


def groups_detail(request):
    return render(request, 'index.html', {})
