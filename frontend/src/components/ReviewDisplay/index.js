import { useState } from 'react'
import { useSelector } from 'react-redux'
import './review-display.css'
import ReviewEditForm from '../ReviewEditForm/index'

const ReviewDisplay = ({ review, business }) => {
    const allUsers = useSelector(state => state.users)
    const reviewUser = allUsers[review.userId]
    const currentUser = useSelector(state => state.session.user)
    const currentUserId = currentUser.id
    const [editFormOpen, setEditFormOpen] = useState(false)

    return (
        <div className='review-container'>
            {reviewUser && <p className='review-username'>{reviewUser.fullName}</p>}
            {review &&
                <>
                    <p className='review-rating'>Rating: {review.rating}/5</p>
                    <p className='review-text'>Review: {review.comment}</p>
                </>
            }
            {currentUserId && reviewUser && currentUserId === reviewUser.id && <button onClick={()=>setEditFormOpen(!editFormOpen)}>Edit Review</button>}
            {editFormOpen && <ReviewEditForm business={business} review={review} setEditFormOpen={setEditFormOpen} ></ReviewEditForm>} 

        </div>
    )
}

export default ReviewDisplay