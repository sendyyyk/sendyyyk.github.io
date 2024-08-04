const Quotes = (props) => {
    const {divQuotes, span1Quotes, span2Quotes, span3Quotes} = props;

    return (
        <div className={`flex flex-col gap-y-1/5vw justify-center item w-full h-15vw mt-10vw ${divQuotes}`}>
            <span className={`me-auto text-2vw text-white italic font-light ${span1Quotes}`}>Developer :</span>
            <span className={`mx-auto text-1/5vw font-semibold italic ${span2Quotes}`}>"Kebahagiaan Bukanlah Sesuatu yang sudah jadi. Itu datang dari tindakan kita sendiri."</span>
            <span className={`ms-auto text-1/3vw font-bold ${span3Quotes}`}>-Dalai Lama.</span>
        </div>
    )
}

export default Quotes;