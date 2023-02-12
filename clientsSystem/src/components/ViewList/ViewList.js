
import React from 'react'

import View from './View'

const ViewList = ({data,searchResult,sortResult}) => {
 return (
    <div>
      {
            sortResult?
              sortResult.map(item=>
                <View text={item} />) 
            :
              searchResult?
                searchResult.map(item=>
                  <View text={item} />)
            :
                data?.map(item=>
                  <View text={item} />)
          } 
    
    </div>
  )
}

export default ViewList