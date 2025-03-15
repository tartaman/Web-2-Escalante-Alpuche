export default function MyInput(params) {
    const {type, placeholder, valor, funcion, name} = params
    return (
        <input className="myInput" type={type} placeholder={placeholder} onChange={funcion} value={valor} name ={name} />
    )
}