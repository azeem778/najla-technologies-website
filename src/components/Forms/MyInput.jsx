import { Form, Input, Typography } from 'antd';
export const MyInput = ({withoutForm, name, label, tooltip, type, size, disabled, required, message, value, placeholder, textArea, oTp, validator, ...props }) => {
    return (
        <>
            {
                withoutForm ?
                    textArea ?
                        <Input.TextArea
                            placeholder={placeholder || ''}
                            value={value || ''}
                            {...props}
                        /> :
                    type==='password' ?
                        <Input.Password
                            placeholder={placeholder || ''}
                            value={value || ''}
                            size={size || 'middle'}
                            disabled={disabled || false}
                            {...props}
                            />:
                        <Input
                            type={type || 'text'}
                            placeholder={placeholder || ''}
                            value={value || ''}
                            size={size || 'middle'}
                            disabled={disabled || false}
                            {...props}
                        />
                :
                <Form.Item
                    name={name}
                    label={<Typography.Text className='fs-14 fw-400 text-white'>{label}</Typography.Text>}
                    tooltip={tooltip || null}
                    className='fs-14 text-white'
                    rules={validator ? [
                        {
                            required: required,
                            message: message,
                        },
                        validator
                    ] : [
                        {
                            required: required,
                            message: message,
                        },
                    ]}
                >
                    {
                        textArea ?
                            <Input.TextArea
                                placeholder={placeholder || ''}
                                value={value || ''}
                                {...props}
                                disabled={disabled || false}
                            /> :
                            oTp ?
                            <Input.OTP 
                                placeholder={placeholder || ''}
                                value={value || ''}
                                {...props}
                                disabled={disabled || false}
                            /> :
                        type==='password' ?
                            <Input.Password
                                placeholder={placeholder || ''}
                                value={value || ''}
                                size={size || 'middle'}
                                disabled={disabled || false}
                                {...props}
                                />:
                            <Input
                                type={type || 'text'}
                                placeholder={placeholder || ''}
                                value={value || ''}
                                size={size || 'middle'}
                                disabled={disabled || false}
                                {...props}
                            />
                    }
                </Form.Item>

            }
        </>
    )
}