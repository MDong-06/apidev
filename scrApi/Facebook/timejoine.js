exports.name = '/facebook/timejoine';
const axios = require('axios');

exports.index = async (req, res, next) => {
  try {
    const { data } = await axios.get(`https://graph.facebook.com/v15.0/${req.query.uid}?fields=id,name,created_time&access_token=EAAD6V7os0gcBAMCku6wrQBuQgF5xUC6iWfZCuJnE7rUBG5taX1KLJ67ZCr4XmJny8nCQHU903rtYD18CKUCyMrkHZAbdK4iCqcOFMsZBZA3d0bZACD7WeVVOOqXAljL4QVNZBs9dJdqA6Ntg2gA7JTZCvsjuxHUoG1b0eeuvdnOR6XS4R5wxMxk2`);
    const createdTime = data.created_time;
    const day = createdTime.split("-")[2].split("T")[0];
    const month = createdTime.split("-")[1].split("T")[0];
    const year = createdTime.split("-")[0];
    const hour = createdTime.split("T")[1].split(":")[0];
    const min = createdTime.split(":")[1].split("+")[0];
    const ss = createdTime.split(":")[2].split("+")[0];
    const date = `${day}/${month}/${year}`;
    const time = `${hour}:${min}:${ss}`;
    res.json({
      uid: data.id,
      name: data.name,
      day: `${date}`,
      time: `${time}`,
      author: 'Dũngkon SUMIPROJECT'
    });
  } catch (e) {
    console.log(e);
  }
};
