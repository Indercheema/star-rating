

function Dialog(props) {
    return (
        <section>
            <div className="box">
                <dialog className={props.checkDialogOpen ? 'open' : 'close'}>
                    <h1>LIVE CHAT</h1>
                    <p>All the agents are busy, Please try again later.</p>
                    <p>You can check FAQ section for all your questions. You can contact us by email, We will get back to you as soon as possible</p>
                    <p>THANK YOU</p>
                    <button className="close-btn" onClick={props.closeDialog}>Close Dialog</button>
                </dialog>
            </div>
        </section>
    )
}

export default Dialog;