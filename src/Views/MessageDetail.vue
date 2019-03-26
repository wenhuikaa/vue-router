<template>
  <div>
      <p>ID:{{$route.params.id}}</p>
      <ul>
          <li>id:{{messageDetail.id}}</li>
          <li>title:{{messageDetail.title}}</li>
          <li>content:{{messageDetail.content}}</li>
      </ul>
  </div>
</template>

<script>
export default {
    data(){
        return{  //异步处理，先显示空值
            messageDetail:{}
        }
    },

    mounted(){
        setTimeout(()=>{
               const allMessageDetails=[
            {
                id:1,
                title:'message001',
                content:'this is message001'
            },
            {
                id:2,
                title:'message002',
                content:'this is message002'
            },
            {
                id:3,
                title:'message003',
                content:'this is message003'
            }
        ]
        this.allMessageDetails=allMessageDetails
        //在数组里面找出其中某一个
        const id=this.$route.params.id*1
        this.messageDetail=allMessageDetails.find(detail=>detail.id===id)
        },1000)
    },

    //因为mounted只执行一次，所以当点击链接后，值没有刷新，说明mounted里面的异步操作只执行了一次,所以监视$route的变化
    //仅仅改变路由参数id时，应该监视
    watch:{
        $route:function(value){      //路由路径(params)发生变化
            const id=value.params.id*1
            this.messageDetail=this.allMessageDetails.find(detail=>detail.id===id)
        }
    }
};
</script>

<style>
</style>