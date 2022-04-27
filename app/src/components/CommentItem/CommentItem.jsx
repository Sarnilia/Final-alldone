// eslint-disable-next-line no-unused-vars
import * as React from 'react'
import Card from '@mui/material/Card'
import CardActions from '@mui/material/CardActions'
import CardContent from '@mui/material/CardContent'
import Button from '@mui/material/Button'
import Typography from '@mui/material/Typography'
import { useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { deleteCommentQuery } from '../../redux/actions/commentsAC'

function CommentItem({ text, _id }) {
  const { postId } = useParams()

  const dispatch = useDispatch()

  const submitHandler = () => {
    dispatch(deleteCommentQuery(postId, _id))
  }

  return (
    <Card sx={{
      minWidth: 275,
      mb: 2,
      display: 'flex',
      justifyContent: 'space-between',
      // bgcolor: 'background.paper',
    }}
    >
      <CardContent sx={{ mb: -3 }}>
        <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
          {text}
        </Typography>
      </CardContent>
      <CardActions>
        <Button onClick={submitHandler} size="small">Delete</Button>
      </CardActions>
    </Card>
  )
}

export default CommentItem
