import React from 'react';
import {Link} from 'react-router-dom';
import{ FiPlusCircle, FiTrash2, FiEdit } from 'react-icons/fi';
import './styles.css';



export default function Profile(){
    return(
        <div className="configdeprofile">
            <header>
                <button type="button">
                    <FiPlusCircle size={18}/>
                </button>
            </header>

                <button type = "button">
                    <FiTrash2 size = {20}/>
                </button>

                <button type = "button">
                    <FiEdit size = {20}/>
                </button>
                    

        </div>
    );
}