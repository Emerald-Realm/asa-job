import styles from '../../styles/Home.module.css'


interface results {
    logo: string
    name: string;
    available: boolean;
}

interface CardProps {
    results?: results[]
}

const Card: React.FC<CardProps> = (props) => {

    return (
        <div  className={styles.card}>
            <img className={styles.logo} src={props.results.logo}/>
            <h3>{props.results.name}</h3>
            {props.results.unitname1? 
            // "one": "two"
            <button className={styles.available}>Available</button>
            :<button className={styles.unavailable}>Unavailable</button>
            }

        </div>
    )
}


export default Card