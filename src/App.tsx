import React from 'react'
import logo from './logo.svg'
import './App.css'
import { QueryWrapper } from './components/queryWrapper'
import { Box, Text } from '@chakra-ui/react'

function App() {
  const token =
    'eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6ImMwNzZjY2YzLWVmNmQtNDFhYy05N2QyLTk1OGQwN2IyYTY4OCIsInNvbF9pZCI6IjExNTE1MjEzIiwiYWNjb3VudF9udW1iZXIiOiI5MTUxMjMxOCIsImRpdmlzaW9uIjoiUGVtYmVsaSBZYW5nIEJhaWsiLCJwYXltZW50X21ldGhvZCI6ImNhc2giLCJjcmVkaXRfbGltaXQiOiIxMDAwMDAwIiwibmFtZSI6IkpvaG4gRG9lIiwiZW1haWwiOiJiaWx0b3VzZXJAZGlhbW9uZC5jby5pZCIsInJvbGUiOiJidXllcl9iaWxsX3RvIiwiY3JlYXRlZF9hdCI6IjIwMjMtMDEtMDhUMDk6NDg6MDguNDc5WiIsImNyZWF0ZWRfYnkiOm51bGwsInVwZGF0ZWRfYXQiOiIyMDIzLTAxLTA4VDA5OjQ4OjA4LjQ3OVoiLCJ1cGRhdGVkX2J5IjpudWxsLCJkZWxldGVkX2F0IjpudWxsLCJkZWxldGVkX2J5IjpudWxsLCJjYXRhbG9nIjpudWxsLCJzdGF0dXMiOiJhY3RpdmUiLCJwYXJlbnRfaWQiOm51bGwsImZpcnN0X25hbWUiOiJKb2huIiwibGFzdF9uYW1lIjoiRG9lIiwibGFzdF9sb2dpbiI6IjIwMjMtMDEtMDhUMDk6NDg6MDguNDc5WiIsImlhdCI6MTY3MzMzMDE5MH0.WdNS7YIJ11tIjWS3OblU__qmeSe0FOxTq2gYhH_4mU4'
  const query = QueryWrapper('/user/buyer', token)
  const { data, refetch } = query.useQueryGet<any>('All Users', {
    size: 4,
    status: 'active',
  })
  console.log(data.data)
  return (
    <div className='App'>
      <Box key='test'>
        {data.data?.map((val: any, idx: number) => (
          <Text key={idx}>{val.name}</Text>
        ))}
      </Box>
    </div>
  )
}

export default App
