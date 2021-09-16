import React from 'react';
import './style.css';
import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { getAllCategory } from '../../actions/category.action';
import { useSelector } from 'react-redux'

const MenuHeader = (props) => {
    const dispatch = useDispatch();
    const category = useSelector(state => state.category);


    useEffect(() => {
        dispatch(getAllCategory());
    }, [dispatch])
    const renderCategories = (categories) => {
        let myCategories = [];
        for (let category of categories) {
            myCategories.push(
                <li key={category.name}>
                    {
                     category.parentId ? <a href={`/${category.slug}?cid=${category._id}&type=${category.type}`}>{category.name}</a> :<span>{category.name}</span>
                    }
                    {category.children.length > 0 ? (<ul>{renderCategories(category.children)}</ul>) : null}
                </li>
                //<li>{category.name}</li> // testing only
            );
        }
        return myCategories;
    }

    return (
        <div className="menuHeader">
            <ul>
                {category.categories.length > 0 ? renderCategories(category.categories) : null}
                {/* {renderCategories(category.categories)} for testing only */}
            </ul>
        </div>


    )

}

export default MenuHeader