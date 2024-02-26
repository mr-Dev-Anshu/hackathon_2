import React from "react";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {

  
  return (
    <div className="w-full p-2 lg:p-8 h-fit grid sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-5 place-items-center gap-3 ">
      <ProductCard
        category="Sports"
        name="Custom Sipper | 500ml"
        price={499}
        src="https://imgs.search.brave.com/D0cq-X6w3w4v9gj2HQh_BPHZN5x0QlMwDA8poa01C8c/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wcmlu/dGlmeS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjIvMDkv/VGhlLUF3ZXNvbWVu/ZXNzLW9mLVBhdHRl/cm5zLmpwZw"
        id="1"
      />
      <ProductCard
        category="Gift"
        name="Personalized coffee mug"
        price={299}
        src="https://imgs.search.brave.com/FgisWD0qckWlMbCDs_Cv4280p5gCxAPijPs7buxHrRs/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9tLm1l/ZGlhLWFtYXpvbi5j/b20vaW1hZ2VzL0kv/NDFnYTE4ZnBBUUwu/anBn"
        id="2"
      />
      <ProductCard
        category="Gift"
        name="Custom Mug 500ml"
        price={399}
        src="https://imgs.search.brave.com/zzyOYADWBB-Ur8qJhs7Mvcj2hsMkKNFETjEtPAzxs-s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wcmlu/dGlmeS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMTEv/QmVlci1NdWctWW91/ci1EZXNpZ24uanBn"
        id="3"
      />
      <ProductCard
        category="Bags"
        name="Custom Bags"
        price={199}
        src="https://imgs.search.brave.com/juxGZeuBF-egaXhQF94LjPmlKGdonRG1tGwtYmxSUfM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9maWxl/cy5jZG4ucHJpbnRm/dWwuY29tL28vdXBs/b2FkL3Byb2R1Y3Qt/YmxvY2svYjEvYjEx/Nzc4ODYwN2RjMWNj/ZTEwMzRlMWQ3ODE1/YThiMWFfdD92PTE2/NTA0MzY4MDg.jpeg"
        id="4"
      />
      <ProductCard
        category="Toys"
        name="Customised Science Toy"
        price={599}
        src="https://imgs.search.brave.com/6qYBiY5wWIrSDFW7O2q4AKRYULoGlV_tyHNgaTC4yHo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMucGVyc29uYWxj/cmVhdGlvbnMuY29t/L3BlcnNvbmFsY3Jl/YXRpb25zL3NpdGVp/bWFnZXMvcGNyXzI0/XzAyMTJfc2l0ZV9o/bXBnX2Rlc2tfa2lk/c18wMS5qcGc"
        id="5"
      />
      <ProductCard
        category="Clothing"
        name="Custom Dress | Girls"
        price={1299}
        src="https://imgs.search.brave.com/S1Nu-1oUJy2tfA92amcbOo6bqRfePuIe3qNhuG2P01s/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9maWxl/cy5jZG4ucHJpbnRm/dWwuY29tL28vdXBs/b2FkL3Byb2R1Y3Qt/YmxvY2svNjgvNjgw/YjRkOTdhNjc1ODAz/MzljOGE4YzEyMWRk/NmEwMmRfdD92PTE2/NTA0MzY4MDg.jpeg"
        id="6"
      />
      <ProductCard
        category="Clothing"
        name="Personalised Baby Cloth"
        price={399}
        src="https://imgs.search.brave.com/3CGryeQkBzbOnqUIVsV4_PV90LIvAMrsamjPt0GWnCM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9wcmlu/dGlmeS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMjMvMTEv/QnVsay1QbGFpbi1C/YWJ5LU9uZXNpZXMl/QzIlQUUtYW5kLUJv/ZHlzdWl0cy5qcGc"
        id="7"
      />
      <ProductCard
        category="Bags"
        name="Customised Bag | Black"
        price={179}
        src="https://imgs.search.brave.com/tIKN54NbOioBbZjo1dNvp7xX14Q9AzXj-hUn70d0L1k/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/c29sby5pbi9pbWFn/ZS9jYWNoZS9jdXN0/b21pc2VkcHJvZHVj/dHMvRUY4MjkvRUY4/MjlfMS01MDB4NTAw/LmpwZw"
        id="8"
      />
      <ProductCard
        category="Stationary"
        name="Customized Pen Holder"
        price={159}
        src="https://imgs.search.brave.com/QXesrAseSxv_P7QuVtpp-H7PGUyyrs6jUV_LqBGFvXM/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/c29sby5pbi9pbWFn/ZS9jYWNoZS9jdXN0/b21pc2VkcHJvZHVj/dHMvRFMyMDEvMS01/MDB4NTAwLmpwZw"
        id="9"
      />
      <ProductCard
        category="Clothing"
        name="Custom T-shirt | White"
        price={399}
        src="https://imgs.search.brave.com/VHY3LAUTOCtf8m9WD2d9CUjhWOCZFDjClHpI8IFCzZ0/rs:fit:500:0:0/g:ce/aHR0cHM6Ly93d3cu/emFrZWtlLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMy8w/Mi8yb2sxLmpwZw"
        id="10"
      />
    </div>
  );
};

export default ProductPage;
