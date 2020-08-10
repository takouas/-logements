import React, { Component } from 'react'


import { Input } from 'antd';
const { Search } = Input;



export default class FiltreTypeDeBien extends Component {

    render() {
        return (
            <div>
          
                     <Search
                        placeholder="Type de bien"

                    //   onChange={(event) => HandleSearch(event)}
                        style={{ width: 200 }} />



            </div>
        )
    }
}
