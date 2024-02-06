import { Avatar as AntdAvatar, AvatarProps } from "antd" 

type Props = AvatarProps & {
    name?: string
}

const CustomAvatar = ({ name, style, ...rest}: Props) => {
  return (
    <AntdAvatar
        alt={name}
        size="small"
        style={{ 
            backgroundColor: "#f56a00", 
            display: 'flex',
            alignItems: 'center',
            border: 'none',
            ...style
        }}
        {...rest}
    >
        {name}
    </AntdAvatar>
  )
}

export default CustomAvatar