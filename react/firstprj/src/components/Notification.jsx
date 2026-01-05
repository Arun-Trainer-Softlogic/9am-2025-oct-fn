

function Notification() {
    const hasNotification = true

  return (
    <div>
        <h2>DashBoard</h2>

        {hasNotification && <p>You have a new message </p>}
    </div>
    
  )
}

export default Notification