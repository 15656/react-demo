//需要渲染什么数据
export   function mapStateToProps(state) {
    return {
      tiger: state
    }
  }
//需要触发什么行为
export   function mapDispatchToProps(dispatch) {
    return {
      PayIncrease: (str) => dispatch(str),
      PayDecrease: (str) => dispatch(str),
    }
  }
