import './styles.css'

export const PostCard = ({title, cover, body, id}) => (
    <div className='post'>
        <img src={cover} alt={title}></img>
        <div className="post-content">
            <h1>{title} {id}</h1>
            <h2>{body}</h2>
        </div>
    </div>
);