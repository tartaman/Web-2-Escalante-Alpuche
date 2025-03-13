function Alumno({ nombre, matricula, calificacion }) {
    const { useState } = React;
    const [visible, setVisible] = useState(true);

    return (
        <div className="alumno-container">
            <button onClick={() => setVisible(!visible)}>
                {visible ? "Ocultar" : "Mostrar"} Información
            </button>
            {visible && (
                <div className="alumno-info">
                    <p><strong>Nombre:</strong> {nombre}</p>
                    <p><strong>Matrícula:</strong> {matricula}</p>
                    <p><strong>Calificación:</strong> {calificacion}</p>
                </div>
            )}
        </div>
    );
}
