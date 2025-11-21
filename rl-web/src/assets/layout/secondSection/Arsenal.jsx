import {useState} from 'react'

const Arsenal = () => {
    const image1 = 'https://cdn.jsdelivr.net/gh/devicons/devicon@latest/icons/python/python-original.svg'
    fetch(image1).then(response => response.json()).then(data => console.log(data))
    const [firstLang, setfirstLang] = useState('Python')
}
export default Arsenal
