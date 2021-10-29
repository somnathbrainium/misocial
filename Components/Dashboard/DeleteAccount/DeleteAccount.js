export default function DeleteAccount() {
    return (
        <>
            <h2 className="header">Delete Account</h2>
            <div className="delete-account-wrapper">
                <p className="paragraph">
                    Warning ! If you continue, you agree that your account will be closed and you will not be able to receive ticket refunds regardless of eligibility. As Event Organizers will no longer have access to information needed to process refunds when your account is closed. Additionally you agree that no refund will be provided to you for any unexpired platinum membership remaining.
                </p>
                <div className="save-cancel-action">
                    <button className="btn btn-next">Continue</button>
                    <button className="btn btn-cancel">Cancel</button>
                </div>
                <p className="paragraph message">Your account was successfully deleted.</p>
            </div>
        </>
    )
}