import React from "react";
import "./App.css";

const CategoryMenu = ({onChangeFunc}) => {

    return (
        <div className="Categories">
            <h3>Image Category</h3>
            <form onChange={e => {onChangeFunc("imageCategory", e.target.value)}}>
                <p>
                    <input type="radio" id="img1" name="radio-group" value="Animal" defaultChecked />
                    <label for="img1">Animal</label>
                </p>
                <p>
                    <input type="radio" id="img2" name="radio-group" value="Food" />
                    <label for="img2">Food</label>
                </p>
                <p>
                    <input type="radio" id="img3" name="radio-group" value="Transport" />
                    <label for="img3">Transport</label>
                </p>
            </form>

            <h3>Quote Category</h3>
            <form onChange={e => {onChangeFunc("textCategory", e.target.value)}}>
                <p>
                    <input type="radio" id="text1" name="radio-group" value="haiku" defaultChecked />
                    <label for="text1">Haiku</label>
                </p>
                <p>
                    <input type="radio" id="text2" name="radio-group" value="quotes" />
                    <label for="text2">Quotes</label>
                </p>
                <p>
                    <input type="radio" id="text3" name="radio-group" value="poems" />
                    <label for="text3">Poems</label>
                </p>
            </form>

            <h3>Sound Category</h3>
            <form onChange={e => {onChangeFunc("soundCategory", e.target.value)}}>
                <p>
                    <input type="radio" id="sound1" name="radio-group" value="animal" defaultChecked />
                    <label for="sound1">Animal</label>
                </p>
                <p>
                    <input type="radio" id="sound2" name="radio-group" value="horn" />
                    <label for="sound2">Horn</label>
                </p>
                <p>
                    <input type="radio" id="sound3" name="radio-group" value="laughter" />
                    <label for="sound3">Laughter</label>
                </p>
            </form>
        </div>
    )
}

export default CategoryMenu;