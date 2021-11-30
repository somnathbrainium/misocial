import Image from 'next/image'
import avatar from '../../public/images/user-avatar.jpg'

export default function UserName() {
    return (
        <div className="user-profilename">
            <Image className="avaterPart"
                src={avatar}
                alt="avatar"
            />
            <h2 className="name">John Doe</h2>
        </div>
    )
}