from django.http import HttpResponse
from django.shortcuts import render, get_object_or_404
from .models import eventos, boletos, localidad, productos
from datetime import datetime, timedelta
from django.http import JsonResponse
import json
# Create your views here.
def index(request):
    Eventos = eventos.objects.all()
    data = {
        "eventos": Eventos
    }
    return render(request, "examen/index.html", data)
def boletos_view(request):
    BoletosObjects = boletos.objects.all()
    data = {
        "boletos": BoletosObjects
    }
    return render(request, "examen/boletos.html", data)

def eventos_view(request):
    Eventos = eventos.objects.all()
    data = {
        "eventos": Eventos
    }
    return render(request, "examen/eventos.html", data)
def addEventoView(request):
    data = {
        "hoy" : datetime.today(),
        "mañana" : datetime.today() + timedelta(days=1),
        "evento": eventos.objects.all()
    }
    print(data)
    return render(request, "examen/agregarEvento.html", data)

def createUserByFetch(request):
    try:
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        fechaInicio = datetime.strptime(body.get("fechaInicio"), "%Y-%m-%dT%H:%M")
        fechafin = datetime.strptime(body.get("fechafin"), "%Y-%m-%dT%H:%M")
        if fechaInicio > fechafin:
            return JsonResponse({"message": "La fecha de inicio no puede ser mayor a la fecha de fin"})
        
        if fechaInicio <= datetime.today():
            return JsonResponse({"message": "La fecha de inicio debe ser mayor a hoy"})
        
        localidades = localidad.objects.get(id=body.get("localidad_id"))
        #obtener el ultimo evento agregado
        eventos1 = eventos.objects.last()
        #checar si la localidad de ese evento no es la misma que la que se esta agregando
        if eventos1.localidad_id.id == localidades.id:
            return JsonResponse({"message": "No se pueden agregar 2 eventos en la misma localidad seguida"})

        eventos1 = eventos(name=body.get("name"), descripcion=body.get("description"), fechaInicio=fechaInicio, fechafin=fechafin, localidad_id=localidades)
        eventos1.save()
        return JsonResponse({"message": "Evento creado correctamente"})
    except Exception as e:
        print(e)
        return JsonResponse({"message": f"Error al crear el evento, ${e}"})
    
def returnLocalidades(request):
    localidades = localidad.objects.all()
    data = []
    for localidad1 in localidades:
        data.append({
            "id": localidad1.id,
            "name": localidad1.name
        })
    return JsonResponse({"localidades": data})

def eliminarEventoView(request):
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)
    try:
        evento = eventos.objects.get(id=body.get("id"))
        evento.delete()
        return JsonResponse({"message": "Evento eliminado correctamente"})
    except Exception as e:
        print(e)
        return JsonResponse({"message": f"Error al eliminar el evento, ${e}"})
    
def boletos_view_especifica(request, evento_id):
    evento = get_object_or_404(eventos, id=evento_id)
    boletos_filtrados = boletos.objects.filter(eventos_id=evento)

    return render(request, "examen/boletos.html", {"boletos": boletos_filtrados})

def productosView(request):
    productos1 = productos.objects.all()
    data = {
        "productos": productos1
    }
    return render(request, "examen/productos.html", data)
def addProductoView(request):
    productos1 = productos.objects.all()
    data = {
        "localidades": localidad.objects.all(),
        "productos": productos1
    }
    return render(request, "examen/agregarProducto.html", data)

def createProductoByFetch(request):
    try:
        body_unicode = request.body.decode('utf-8')
        body = json.loads(body_unicode)
        localidades = localidad.objects.get(id=body.get("localidad_id"))
        #checar si algun campo esta vacio
        if body.get("name") == "":
            return JsonResponse({"message": "El nombre no puede estar vacio"})
        if body.get("precio") == "":
            return JsonResponse({"message": "El precio no puede estar vacio"})
        if int(body.get("precio")) < 0:
            return JsonResponse({"message": "El precio no puede ser negativo"})
        # obtener los produtos de hoy
        productos_hoy = productos.objects.filter(created_at=datetime.today())
        if productos_hoy.count() >= 10:
            return JsonResponse({"message": "Ya se han creado 10 productos hoy"})
        productos1 = productos(name=body.get("name"), precio=body.get("precio"), localidad_id=localidades)
        productos1.save()
        return JsonResponse({"message": "Producto creado correctamente"})
    except Exception as e:
        print(e)
        return JsonResponse({"message": f"Error al crear el producto, ${e}"})
    
def eliminarProductoView(request):
    body_unicode = request.body.decode('utf-8')
    body = json.loads(body_unicode)
    try:
        producto = productos.objects.get(id=body.get("id"))
        producto.delete()
        return JsonResponse({"message": "Producto eliminado correctamente"})
    except Exception as e:
        print(e)
        return JsonResponse({"message": f"Error al eliminar el producto, ${e}"})