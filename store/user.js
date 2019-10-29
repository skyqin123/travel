
// user 中的store 用来存储 用户的信息

// 存储信息,是一个函数，返回一个对象
export const state = () => ({
  user: {
    token: "",
    userIfor: {}
  }
})

// 负责同步更改数据
export const mutations = {
  setUser(state,user) {
    state.user = user
  }
}

// 负责异步修改数据
export const actions = {
  setUser (context, form) {
    this.$axios.post("/accounts/login",form).then(res => {
      context.commit ('setUser',res.data)
      localStorage.setItem('user',JSON.stringify(res.data))
    })
    
  }
}