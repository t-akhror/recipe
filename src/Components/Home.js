import axios from 'axios'
import React, { useEffect, useState } from 'react'
import { Button,Container, Form, FormControl,Row} from 'react-bootstrap'
import Food from './Food'

function Home() {
const [recipes, setRecipes]=useState([])
const [search, setSearch]=useState('')
const [filter, setFilter]=useState('all')
const APP_ID='0ef3dea4';
const APP_KEY='1e17c3b6b8f2ab029c4c1992fa038d23'

async function fetchRecipe(){
    const response= await axios.get(`https://api.edamam.com/api/recipes/v2?type=public&q=${search}&app_id=${APP_ID}&app_key=${APP_KEY}&${filter==="all"?'':'cuisineType='+filter}`)
    setRecipes(response.data.hits)
    console.log(response.data.hits)
}
const searchRecipe=(e)=>{
    e.preventDefault()
    const newSearch=e.target.text.value;
    setSearch(newSearch)
}
const handleFilter=(e)=>{
    e.preventDefault()
    const newFilter=e.target.value;
    setFilter(newFilter)
  
}
useEffect(()=>{
    fetchRecipe()
},[search,filter])
console.log(search)
  return (
    <Container>
        <div className='d-flex justify-content-between align-items-center my-4'>
            <p className='display-5'>Food recipe </p>
            <div className='d-flex'>
            <Form className="d-flex" onSubmit={searchRecipe}>
                <FormControl
                type="text"
                name='text'
                placeholder="Search"
                className="me-2"
                aria-label="Search"
                />
                <Button variant="outline-success" type='submit' >Search</Button>
            </Form>
            <Form.Select aria-label="Default select example" className='w-50 ms-3' onChange={handleFilter}>
                <option value='all'>All Cusine</option>
                <option value="American"> American  </option>
                <option value="Asian"> Asian  </option>
                <option value="British"> British  </option>
                <option value="Caribbean"> Caribbean  </option>
                <option value="Central Europe"> Central Europe  </option>
                <option value="Chinese"> Chinese  </option>
                <option value="Eastern Europe"> Eastern Europe  </option>
                <option value="French"> French  </option>
                <option value="Indian"> Indian  </option>
                <option value="Italian"> Italian  </option>
                <option value="Japanese"> Japanese  </option>
                <option value="Kosher"> Kosher  </option>
                <option value="Mediterranean"> Mediterranean  </option>
                <option value="Mexican"> Mexican  </option>
                <option value="Middle Eastern"> Middle Eastern  </option>
                <option value="Nordic"> Nordic  </option>
                <option value="South American"> South American  </option>
                <option value="South East Asian"> South East Asian  </option>
            </Form.Select>
            </div>
            
        </div>

        {/* Food  */}
        <Row>
            {recipes.map((recipe,index)=>(
                <Food recipe={recipe}  key={index}/>
            ))}
        </Row>
    </Container>
  )
}

export default Home
