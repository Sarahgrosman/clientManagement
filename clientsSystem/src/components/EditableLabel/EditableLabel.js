import {useState} from 'react'
import EditableLabel_Edit from '../EditableLabel_Edit/EditableLabel_Edit';
import EditableLabel_View from '../EditableLabel_View/EditableLabel_View';

const EditableLabel = (props) => {
    const [edit,setEdit] = useState(false)
    const [text,setText] = useState(props.text)
  return (
    <div>
        {
            edit?
            <EditableLabel_Edit
              text={text} 
              setText={setText} 
              done={()=>setEdit(false)} 
              />
            :
            <EditableLabel_View text={text} startEdit={()=>setEdit(true)} />
        }
    </div>
  )
}

export default EditableLabel