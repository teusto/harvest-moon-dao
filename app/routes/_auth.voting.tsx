import styles from '~/styles/voting.module.scss'
import Carrot from '~/imgs/carrot.jpg'
import Tomato from '~/imgs/tomato.jpg'
import Wheat from '~/imgs/wheat.jpg'
import Corn from '~/imgs/corn.jpg'
import Potato from '~/imgs/potato.jpg'

interface ICardCrop {
    name: string
    nVotes: Number
    crop: 'Tomato' | 'Potato' | 'Carrot' | 'Wheat' | 'Corn'

}

const CardCrop = ({name, crop}:ICardCrop) => {

    const getImage = () => {
        switch (crop) {
            case 'Tomato':
                return Tomato;
            case 'Potato':
                return Potato;
            case 'Carrot':
                return Carrot;
            case 'Wheat':
                return Wheat;
            case 'Corn':
                return Corn;
            default:
                break;
        }
    }

    return (
        <li className={styles.option_card} style={{  
            backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.2)), url(${getImage()})`,
            backgroundPosition: 'center',
            backgroundSize: 'cover',
            backgroundRepeat: 'no-repeat',
            
          }}>
            <div className={styles.card_top}>
                <p>{name}</p>
            </div>
            <div className={styles.card_bottom}>
                <div className={styles.card_left}>
                    <button>Vote</button>
                </div>
                <div className={styles.card_right}>
                    <div className={styles.round}>s</div>
                    <div className={styles.round}>21</div>
                </div>
            </div>
        </li>
    )
}

const Voting = (): React.JSX.Element => {
    return (
        <section className={styles.wrapper}>
            <div className={styles.container_current}>
                voting time this show up
            </div>
            <div className={styles.section}>
                <ul className={styles.options_list}>
                    <CardCrop name='Vote Option I' crop='Carrot' />
                    <CardCrop name='Vote Option II' crop='Tomato' />
                    <CardCrop name='Vote Option III' crop='Corn' />
                    <CardCrop name='Vote Option IV' crop='Wheat' />
                    <CardCrop name='Vote Option V' crop='Potato' />
                </ul>
            </div>
        </section>
    )
};

export default Voting
