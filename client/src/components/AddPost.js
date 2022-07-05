const AddPost = () => {
    const [post, setPost] = useState({
        title: '', 
        content: '',
      });
    
      const { title, content } = post;
    
      const onChange = (e) => setPost({ ...post, [e.target.name]: e.target.value })

      const onSubmit = (e) => {
        e.preventDefault();
        let user = localStorage.getItem('user');
        let parseUser = JSON.parse(user);
        let userId = parseUser.id;
        fetchData("/post/create",
          {
            title,
            content,
            userId
          },
          "POST")
          .then((data) => {
            if (!data) {
              console.log(data);
            }
          })
          .catch((error) => {
            console.log(error);
          })
      }

    return (
        <form>
            <div class="form-group">
                <label for="title">Title</label>
                <input type="text" class="form-control" id="title" onChange={onChange} placeholder="Enter title"/>
            </div>
            <div class="form-group">
                <label for="content">Content</label>
                <textarea class="form-control" id="content" onChange={onChange} rows="3"></textarea>
            </div>
            <button type="submit" class="btn btn-primary" onClick={onSubmit}>Submit</button>
        </form>
    )
}