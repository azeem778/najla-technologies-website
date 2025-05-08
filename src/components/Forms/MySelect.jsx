import {Form, Select, Typography} from 'antd';
export const MySelect = ({withoutForm,name,label,mode,disabled,required,message,value,options, ...props}) => {
  return (
    withoutForm?
      <Select 
        maxTagCount= 'responsive'
        className='select'
        value={value || ''} 
        mode={mode || ''} 
        disabled={disabled || false} 
        {...props}
      >
          {
              options?.map(opt=><Select.Option value={opt?.id} key={opt?.id}>{opt?.name}</Select.Option>)
          }
      </Select>
      :
      <Form.Item
          name={name}
          label={<Typography.Text  className='fs-14 fw-400 text-white'>{label}</Typography.Text>}
          rules={[
              {
              required,
              message,
              },
          ]}
          className='fs-14 text-white'
          >
              <Select 
                value={value || ''} 
                mode={mode || ''} 
                disabled={disabled || false} 
                maxTagCount= 'responsive'
                {...props}
                >
                  {
                      options?.map(opt=><Select.Option value={opt?.name} key={opt?.id}>{opt?.name}</Select.Option>)
                  }
              </Select>
      </Form.Item>  
  )
}