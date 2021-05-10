**Round 1 - rails test

Find the top 5 colors from an image
(basically boiled down to array and hash manipulation)

**Round 2 - System Architecture

Customer support chat 

sessions
id
customer_id

customers
  id

supportStaff
  id
  name

chats
 id
 customer_id
 supportStaff_id

messages
 sender_id
 employee true/false
 chat_id
 message text



  Api

  Get - chats/
  input - {
      supportStaff_id : nil
  }
  output - {
      true/false
  }

  put - next_chats
  input
  UPDATE chats SET supportStaff_id = #{} WHERE supportStaff_id IS NULL LIMIT 1 RETURNING id
  output { false }


  Post - CustomersController
  Post customers/
  input { uid }
  output 200 OK

  Post - chats/
  input {session_id }
  output {chat_id}

  Post - messages/
  input - {
      chat_id
      message_string
      employee: false
  }

  Get - chats/:
  input - {
      chat_id
      last_message_id
  }



<img width="1440" alt="Screen Shot 2021-05-10 at 9 47 45 AM" src="https://user-images.githubusercontent.com/48069738/117695873-8d9b7e80-b175-11eb-90f0-1a1b7379c890.png">
<img width="1440" alt="Screen Shot 2021-05-10 at 9 47 52 AM" src="https://user-images.githubusercontent.com/48069738/117695889-912f0580-b175-11eb-8df7-190ae4c3ffb9.png">
