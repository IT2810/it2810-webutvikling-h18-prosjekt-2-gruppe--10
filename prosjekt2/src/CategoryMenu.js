import React from "react";
import "./App.css";

const CategoryMenu = ({showInMobile, onChangeFunc}) => {

    return (
        
        <div className={showInMobile ? "categories open": "categories"}>
            <h3>Image Category</h3>
            <form onChange={e => {onChangeFunc("imageCategory", e.target.value)}}>
                <p>
                    <input type="radio" id="img1" name="radio-group" value="Animal" defaultChecked />
                    <label htmlFor="img1">Animal</label>
                </p>
                <p>
                    <input type="radio" id="img2" name="radio-group" value="Food" />
                    <label htmlFor="img2">Food</label>
                </p>
                <p>
                    <input type="radio" id="img3" name="radio-group" value="Transport" />
                    <label htmlFor="img3">Transport</label>
                </p>
            </form>

            <h3>Quote Category</h3>
            <form onChange={e => {onChangeFunc("textCategory", e.target.value)}}>
                <p>
                    <input type="radio" id="text1" name="radio-group" value="inspo" defaultChecked />
                    <label htmlFor="text1">Inspirational</label>
                </p>
                <p>
                    <input type="radio" id="text2" name="radio-group" value="romance" />
                    <label htmlFor="text2">Romance</label>
                </p>
                <p>
                    <input type="radio" id="text3" name="radio-group" value="science" />
                    <label htmlFor="text3">Science</label>
                </p>
            </form>

            <h3>Sound Category</h3>
            <form onChange={e => {onChangeFunc("soundCategory", e.target.value)}}>
                <p>
                    <input type="radio" id="sound1" name="radio-group" value="animal" defaultChecked />
                    <label htmlFor="sound1">Animal</label>
                </p>
                <p>
                    <input type="radio" id="sound2" name="radio-group" value="horn" />
                    <label htmlFor="sound2">Horn</label>
                </p>
                <p>
                    <input type="radio" id="sound3" name="radio-group" value="laughter" />
                    <label htmlFor="sound3">Laughter</label>
                </p>
            </form>
        </div>
    )
}

export default CategoryMenu;