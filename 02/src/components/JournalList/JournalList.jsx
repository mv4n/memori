import JournalItem from "../JournalItem/JournalItem.jsx";
import CardButton from "../CardButton/CardButton.jsx";

function JournalList({ data }) {

    // if (data.length > 0) {
    //     return (
    //         <div className="journal-list">
    //             {
    //             data.map( item => (
    //               <CardButton key={item.id} className="card">
    //                 <JournalItem title={item.title} date={item.date} text={item.text} />
    //               </CardButton>
    //             ))
    //             }
    //         </div>
    //     )
    // } else {
    //     return (
    //         <p>click to +New memorise to add first memorise</p>
    //     )
    // }

    function sortByDate(a ,b) {
        return b.date - a.date;
    }

    return data.length
        ? data.sort(sortByDate).map(item => (
            <CardButton key={item.id} className="card">
                <JournalItem title={item.title} date={item.date} text={item.text}/>
            </CardButton>
        ))
        : <p>click to +New memorise to add first memorise</p>;

}

export default JournalList;