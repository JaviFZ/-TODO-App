
//! A parte de recibir el fill, podemos crear un iterable que almacena el resto de la props recibidas
//! Llamado restOperator (...props), se usa al hacer destructuring cuando traemos algunas props que conocemos
//! y queremos almacenar el resto, de esta manera podemos utilizar el className directamente en la etiqueta de la App.jsx

const MoonIcon = ({ fill = "#fff", ...props }) => {
    return (
        // en un svg podemos poner el fill directamente en la etiqueta svg y pasarselo como props
        // si usamos tailwind tambien podemos aplicar el className="fill-red" p.ej.
        <svg
            {...props}
            //className="fill-blue-950"
            fill={fill}
            xmlns="http://www.w3.org/2000/svg"
            width="26"
            height="26"
        >
            <path
                //fill="#FFF" 
                fillRule="evenodd"
                d="M13 0c.81 0 1.603.074 2.373.216C10.593 
            1.199 7 5.43 7 10.5 7 16.299 11.701 21 17.5 21c2.996 0 5.7-1.255 
            7.613-3.268C23.22 22.572 18.51 26 13 26 5.82 26 0 20.18 0 13S5.82 0 13 0z"
            />
        </svg>
    )
}

export default MoonIcon