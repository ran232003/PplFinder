import React, { useContext, useEffect, useState } from "react";
import Text from "components/Text";
import Spinner from "components/Spinner";
import CheckBox from "components/CheckBox";
import IconButton from "@material-ui/core/IconButton";
import FavoriteIcon from "@material-ui/icons/Favorite";
import * as S from "./style";
import PageContext from "context/PageContext";

const UserList = ({ users, isLoading }) => {
  const context = useContext(PageContext);
  const [hoveredUserId, setHoveredUserId] = useState();
  const[noFilter,setNoFilter] = useState(true)
  const[renderPage,setRenderPage] = useState(context.pageNum)
  const[filterState ,setFilterState] = useState({
    Brazil:false,
    Australia:false,
    Canada:false,
    Germany:false,
    Turkey:false,
  });
  const handleFavorite = (user)=>{
    if(!user.favorite){
      user.favorite = true;
      localStorage.setItem(user.email, 'true');
    }
    else{
      user.favorite = !user.favorite
      localStorage.removeItem(user.email);
    }

  }

  const updateFilter = (value,lable)=>{
    //updating the current choose checkbox
   
    setFilterState(()=>{
      return {...filterState,[lable]:!filterState[lable]}
    })

  }
  const handleMouseEnter = (index) => {
    setHoveredUserId(index);
  };
    //checking if any of the checkBox is true

  const checkFilter = ()=>{
    for (const country in filterState) {
        if(filterState[country] !== false)
        {
          
          return false
        }
    }
    return true;
  }
useEffect(()=>{
  //updating after every change in the checkbox
  const checkState = checkFilter();
  setNoFilter(checkState);
  
},[filterState,context.pageNum])
  const handleMouseLeave = (user) => {
    if(!user.favorite){
    setHoveredUserId();
    }
  };


  return (
    <S.UserList>
      <S.Filters>
        <CheckBox value="BR" updateFilter = {updateFilter} label="Brazil" />
        <CheckBox value="AU" updateFilter = {updateFilter} label="Australia" />
        <CheckBox value="CA" updateFilter = {updateFilter} label="Canada" />
        <CheckBox value="DE" updateFilter = {updateFilter} label="Germany" />
        <CheckBox value="TR" updateFilter = {updateFilter} label="Turkey" />
      </S.Filters>
      <S.List>
        {users.map((user, index) => {
          //if no filter show everything so every country is false
          //if no filter is false then check which country is true
          if((noFilter === true||filterState[user?.location.country] === true)&&context.pageNum === 0){
            console.log(context.pageNum)
          return (
            <S.User
              key={index}
              onMouseEnter={() => handleMouseEnter(index)}
              onMouseLeave={() =>handleMouseLeave(user)}
            >
              <S.UserPicture src={user?.picture.large} alt="" />
              <S.UserInfo>
                <Text size="22px" bold>
                  {user?.name.title} {user?.name.first} {user?.name.last}
                </Text>
                <Text size="14px">{user?.email}</Text>
                <Text size="14px">
                  {user?.location.street.number} {user?.location.street.name}
                </Text>
                <Text size="14px">
                  {user?.location.city} {user?.location.country}
                </Text>
              </S.UserInfo>
              <S.IconButtonWrapper onClick = {()=>{handleFavorite(user)}} isVisible={index === hoveredUserId||user.favorite === true}>
                <IconButton>
                  <FavoriteIcon color="error" />
                </IconButton>
              </S.IconButtonWrapper>
            </S.User>
          );}
          //favorite page display
          else if((noFilter === true||filterState[user?.location.country] === true)&&context.pageNum === 1 &&user.favorite === true){
            return (
              <S.User
                key={index}
                onMouseEnter={() => handleMouseEnter(index)}
                onMouseLeave={() =>handleMouseLeave(user)}
              >
                <S.UserPicture src={user?.picture.large} alt="" />
                <S.UserInfo>
                  <Text size="22px" bold>
                    {user?.name.title} {user?.name.first} {user?.name.last}
                  </Text>
                  <Text size="14px">{user?.email}</Text>
                  <Text size="14px">
                    {user?.location.street.number} {user?.location.street.name}
                  </Text>
                  <Text size="14px">
                    {user?.location.city} {user?.location.country}
                  </Text>
                </S.UserInfo>
                <S.IconButtonWrapper onClick = {()=>{handleFavorite(user)}} isVisible={index === hoveredUserId||user.favorite === true}>
                  <IconButton>
                    <FavoriteIcon color="error" />
                  </IconButton>
                </S.IconButtonWrapper>
              </S.User>
            )
          }
        })}
      
        {isLoading && (
          <S.SpinnerWrapper>
            <Spinner color="primary" size="45px" thickness={6} variant="indeterminate" />
          </S.SpinnerWrapper>
        )}
      </S.List>
    </S.UserList>
  );
};

export default UserList;
