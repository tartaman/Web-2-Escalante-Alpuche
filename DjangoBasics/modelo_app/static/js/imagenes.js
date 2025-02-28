let urls = [
    'https://img.freepik.com/psd-gratis/plantilla-psd-redes-sociales-festividades-carnaval-brasil-fondo-colorido-carnaval-brasil_314999-2885.jpg?t=st=1740716544~exp=1740720144~hmac=87009a1dc805b0620ea81d1f9a6556d918749c0c503498ec8c06f9ee564a453d&w=900',
    'https://img.freepik.com/psd-gratis/plantilla-redes-sociales-bienvenida-al-carnaval_220664-5244.jpg?t=st=1740716571~exp=1740720171~hmac=72ece6f3a2ee376b42e3105258ae5c56c2655f8a64f36e3b2b5907f7bacffb17&w=740',
    'https://img.freepik.com/vector-gratis/concepto-carnaval-brasileno-diseno-plano_23-2148806971.jpg?t=st=1740716448~exp=1740720048~hmac=21336a50c02ff43446952c05e025607fe17e33483f319889ffb1a6be82a36d0e&w=900',
    'https://img.freepik.com/psd-gratis/ofrezca-historias-carnaval-redes-sociales-venta-mascaras-carnaval_220664-4101.jpg?t=st=1740716480~exp=1740720080~hmac=4db74c3834ce4fd273059786feee15de5819ce8e6c115faf1ce1db56b6c2c93d&w=740',
    'https://img.freepik.com/psd-gratis/redes-sociales-alimentan-carnaval-economia-venta-productos-oferta_220664-2665.jpg?t=st=1740716635~exp=1740720235~hmac=2b33445db119f324ce9fe1e90c52ba530f80a0edd205de468b4e8ef5ef5c71c3&w=900'
]

let divs = document.querySelectorAll('#img');

for (let i = 0; i < divs.length; i++) {
    console.log(divs[i]);
    divs[i].style.backgroundRepeat = 'no-repeat';
    divs[i].style.backgroundImage = `url(${urls[i]})`;
    divs[i].style.backgroundSize = 'cover';
    divs[i].style.backgroundPosition = 'center';
}