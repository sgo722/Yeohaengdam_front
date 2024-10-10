// board.js
import { ref } from 'vue';
import { defineStore } from 'pinia';
import axios from 'axios';

export const useBoardStore = defineStore('board', () => {
  const boardList = ref([]);
  const selectedBoard = ref(null);

  const getList = () => {
    axios
      .get('http://localhost:8080/api/articles/list')
      .then((response) => {
        console.log(response);
        boardList.value = response.data;
      })
      .catch((error) => {
        console.error(error);
      });
  };

  const deleteArticle = async (articleNo) => {
    await axios.get(`http://localhost:8080/api/articles/delete`, {
      params: { articleNo },
    });
    console.log('finish delete');
    return;
  };

  const modifyArticle = async (board) => {
    const updatedArticle = await axios.get(
      `http://localhost:8080/api/articles/update`,
      { params: { board } }
    );
    console.log('finish update');
    return updatedArticle;
  };

  return {
    boardList,
    selectedBoard,
    getList,
    deleteArticle,
    modifyArticle,
  };
});
