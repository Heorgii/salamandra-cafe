import React, { useState } from 'react';
import {
  AlcogolItem,
  CloseButton,
  Details,
  DetailsItem,
  DetailsText,
  DetailsTitle,
  DivForName,
  Img,
  InfoBox,
  InfoItem,
  ModalContent,
  ModalWrapper,
  PriceItem,
  TitleItem,
} from '../Menu.styled';

export const Modal = ({ product, onClose }) => {
  const { BASE_URL_IMG } = window.global;
  const [isOpen, setIsOpen] = useState(true);

  const handleClose = () => {
    setIsOpen(false);
    setTimeout(onClose, 300);
  };
  return (
    <ModalWrapper>
      <ModalContent isOpen={isOpen}>
        <CloseButton  onClick={handleClose}>&times;</CloseButton>
        <div style={{display: 'flex'}}>
          <Img src={BASE_URL_IMG + product.images} alt={product.name} />
          <InfoBox>
            <TitleItem>{product.name}</TitleItem>

            <DivForName>
              {product.alcohol &&
                product.alcohol.map((alc, index) => (
                  <AlcogolItem key={index}>{alc}</AlcogolItem>
                ))}
            </DivForName>

            <InfoItem>
              <PriceItem>
                <DetailsTitle>
                  {product.price} {product.currency}
                </DetailsTitle>
              </PriceItem>
              {product.size.value !== 0 && (
                <DetailsItem>
                  {product.size.value}
                  {product.size.mesure}
                </DetailsItem>
              )}
            </InfoItem>

            <Details>
              {product.details.map((det, index) => (
                <DetailsText key={index}>{det}</DetailsText>
              ))}
            </Details>
          </InfoBox>
        </div>
      </ModalContent>
    </ModalWrapper>
  );
};

// <MenuListItem
//   key={uuidv4()}
//   className={activeSection === it ? 'active' : ''}
// >
//   {item.images !== 'none' && item.images && (
//     <Img
//       src={BASE_URL_IMG + item.images}
//       alt={item.name}
//       loading="lazy"
//     />
//   )}
//   {/* {item.images === 'none' && (
//   <Img src={nophoto} alt={item.name} />
// )} */}
//   <InfoBox>
//     <TitleItem>{item.name}</TitleItem>
//     <DivForName>
//       {item?.alcohol &&
//         item.alcohol?.map(alc => (
//           <AlcogolItem key={uuidv4()}>
//             {alc}
//           </AlcogolItem>
//         ))}
//     </DivForName>
//     <InfoItem>
//       <PriceItem>
//         <DetailsTitle>
//           {item?.price} {item?.currency}
//         </DetailsTitle>
//       </PriceItem>
//       {item?.size.value !== 0 && (
//         <DetailsItem>
//           {item?.size.value} {item?.size.mesure}
//         </DetailsItem>
//       )}
//     </InfoItem>
//     <Details>
//       {item?.details &&
//         item.details?.map(det => (
//           <DetailsText key={uuidv4()}>
//             {det}
//           </DetailsText>
//         ))}
//     </Details>
//   </InfoBox>
// </MenuListItem>
