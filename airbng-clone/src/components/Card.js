// import image1 from '../images/katie.png'

export default function Card (props) {

    let badgeText;
    if(props.openSpots === 0) {
        badgeText = "SOLD OUT"
    }
    else if (props.location === "Online") {
        badgeText = "ONLINE"
    }


    return(
        <div className="card">
            {badgeText && <div className="card--badge">{badgeText}</div>}
            <img src={props.coverImg} alt="katie" className="card--image" />
            <div className="card--stats">
                <img src="/images/star1.png" alt="star rating" className="card--star" />
                <span className="gray">{props.stats.rating}</span>
                <span className="gray">({props.stats.reviewCount}) .</span>
                <span>{props.location}</span>
            </div>
            <p className="card--title">{props.title}</p>
            <p><span className="bold">From $136</span> / person</p>
        </div>
    )
}