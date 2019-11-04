//需要渲染什么数据
export   function mapStateToProps(state) {
    return {
      tiger: state
    }
  }
//需要触发什么行为
export   function mapDispatchToProps(dispatch) {
    return {
      PayIncrease: () => dispatch({ type: '涨工资' }),
      PayDecrease: () => dispatch({ type: '扣工资' }),
    }
  }
