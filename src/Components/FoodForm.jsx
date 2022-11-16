import { Card, Col, Input, Divider, Button } from 'antd';
import './FoodForm.css';
import React, { useState } from "react"

function FoodForm (props) {
    const [name, setName] = useState("")
    const [image, setImage] = useState("")
    const [calories, setCalories] = useState("")
    const [servings, setServings] = useState("")


    const nameChangeHandler = (event) => setName(event.target.value)
    const imageChangeHandler = (event) => setImage(event.target.value)
    const caloriesChangeHandler = (event) => setCalories(event.target.value)
    const servingsChangeHandler = (event) => ( setServings(event.target.value))

    const submitHandler = (event) => {
        event.preventDefault()
    
        const chic = {
          name: name,
          image: image,
          calories: calories,
          servings: servings,
        }
        console.log(chic)

        props.onNewFood(chic)
        
    

        setName("")
        setImage("")
        setCalories("")
        setServings("")
      }

    return (
        <form onSubmit={submitHandler}>
            <Card className='new-food__controls'>
                <Col className='new-food__control'>
                    <Divider>Name</Divider>
                    <Input type="text" value={name} onChange={nameChangeHandler}/>
                    <Divider>Image</Divider>
                    <Input type="text" value={image} onChange={imageChangeHandler}/>
                    <Divider>Calories</Divider>
                    <Input type="number" min='1' step='1' value={calories} onChange={caloriesChangeHandler}/>
                    <Divider>Servings</Divider>
                    <Input type="number" min='1' step='1' value={servings} onChange={servingsChangeHandler} />

                </Col>
            </Card>
            <div className='new-food__action'>
                <Button type='submit'>Add Food</Button>
            </div>
        </form>
    )
}

export default FoodForm