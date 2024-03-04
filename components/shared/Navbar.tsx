"use client";
import React from "react";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { navSchema } from "@/schemas";
import { Button } from "@/components/ui/button";
import Sidebar from "./Sidebar";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormMessage,
} from "@/components/ui/form";
import { Input } from "@/components/ui/input";

const Navbar = () => {
  const form = useForm<z.infer<typeof navSchema>>({
    resolver: zodResolver(navSchema),
    defaultValues: {
      search: "",
    },
  });
  function onSubmit(values: z.infer<typeof navSchema>) {
    // Do something with the form values.
    // ✅ This will be type-safe and validated.
    console.log(values);
  }
  return (
    <>
      <div
        className="min-h-[98px] px-[20px] py-[21px]  md:p-[12px]  flex flex-col gap-2 justify-center 
      shadow-gray-300 shadow-md "
      >
        {/* big screens */}
        <div className=" flex-row gap-[50px] hidden  md:flex    items-center justify-center">
          {/* logo */}
          <div>
            <svg
              className="header-top__logo "
              xmlns="http://www.w3.org/2000/svg"
              width="63.519"
              height="43"
              viewBox="0 0 63.519 43"
            >
              <g
                id="Group_100486"
                data-name="Group 100486"
                transform="translate(-205.604 -183.48)"
              >
                <path
                  id="Path_133446"
                  data-name="Path 133446"
                  d="M221.23,239.055l-6-8.065H205.6v33.222h9.623V247.028l6,8.111,6.094-8.111v17.184h9.623V230.99h-9.623Z"
                  transform="translate(0 -37.737)"
                ></path>
                <g
                  id="Group_95382"
                  data-name="Group 95382"
                  transform="translate(205.665 183.48)"
                >
                  <g
                    id="Group_95389"
                    data-name="Group 95389"
                    transform="translate(0 0)"
                  >
                    <path
                      id="Path_133447"
                      data-name="Path 133447"
                      d="M376.478,231.24v15.087l17.008-14.657c-.223-.065-.447-.126-.672-.179a9.161,9.161,0,0,0-2.085-.252Z"
                      transform="translate(-341.39 -221.416)"
                    ></path>
                    <path
                      id="Path_133448"
                      data-name="Path 133448"
                      d="M376.478,334.3h15.809q.511,0,1-.047l-16.813-15.032Z"
                      transform="translate(-341.39 -291.296)"
                    ></path>
                    <path
                      id="Path_133449"
                      data-name="Path 133449"
                      d="M207.689,186.366l1.162,1.7h.286l1.162-1.7v3.016h1.788v-5.894h-1.583l-1.511,2.115-1.511-2.115H205.9v5.894h1.789Z"
                      transform="translate(-205.901 -183.487)"
                    ></path>
                    <path
                      id="Path_133450"
                      data-name="Path 133450"
                      d="M243.837,189.47a2.288,2.288,0,0,0,2.539-2.505v-3.476h-1.788v3.363c0,.737-.215,1.04-.751,1.04-.519,0-.733-.295-.733-1.04v-3.363h-1.788v3.476a2.24,2.24,0,0,0,2.522,2.505"
                      transform="translate(-234.03 -183.487)"
                    ></path>
                    <path
                      id="Path_133451"
                      data-name="Path 133451"
                      d="M271.132,186.946l.733.257c.3.1.394.231.394.4,0,.283-.224.428-.563.428a2.515,2.515,0,0,1-1.306-.47l-.4,1.472a4.739,4.739,0,0,0,1.931.428,1.946,1.946,0,0,0,2.182-1.943c0-.762-.393-1.249-1.368-1.609l-.751-.282a.375.375,0,0,1-.3-.377c0-.231.178-.376.518-.376a2.863,2.863,0,0,1,1.341.411l.483-1.421a4.586,4.586,0,0,0-1.9-.385,1.954,1.954,0,0,0-2.218,1.883,1.541,1.541,0,0,0,1.225,1.584"
                      transform="translate(-256.741 -183.48)"
                    ></path>
                    <path
                      id="Path_133452"
                      data-name="Path 133452"
                      d="M324.392,187.883h-2.333v-4.395H320.27v5.894h4.122Z"
                      transform="translate(-296.744 -183.487)"
                    ></path>
                    <path
                      id="Path_133453"
                      data-name="Path 133453"
                      d="M344.146,189.383h4.328v-1.5h-2.62v-.78h2.066v-1.4h-2.066v-.711h2.62v-1.5h-4.328Z"
                      transform="translate(-315.708 -183.487)"
                    ></path>
                    <path
                      id="Path_133454"
                      data-name="Path 133454"
                      d="M374.71,187.753a1.359,1.359,0,0,0-1.028-1.447,1.311,1.311,0,0,0,.617-1.2c0-1.1-.671-1.612-1.9-1.612h-2.6v5.894h2.951c1.252,0,1.958-.615,1.958-1.63m-3.12-2.965h.474c.313,0,.438.191.438.468s-.116.477-.447.477h-.465Zm.8,3.294h-.8v-1.023h.778c.349,0,.483.217.483.52a.442.442,0,0,1-.456.5"
                      transform="translate(-336.086 -183.486)"
                    ></path>
                    <path
                      id="Path_133455"
                      data-name="Path 133455"
                      d="M400.61,187.883h-2.333v-4.395h-1.789v5.894h4.122Z"
                      transform="translate(-357.284 -183.487)"
                    ></path>
                    <path
                      id="Path_133456"
                      data-name="Path 133456"
                      d="M421.407,188.412h1.752l.251.971h1.779l-1.859-5.894h-2.083l-1.851,5.894h1.77Zm.885-3.216.447,1.95h-.9Z"
                      transform="translate(-375.479 -183.486)"
                    ></path>
                    <path
                      id="Path_133457"
                      data-name="Path 133457"
                      d="M454.293,187.883h-2.012l2.012-3.207v-1.188h-4.31v1.5h2.038l-2.038,3.208v1.187h4.31Z"
                      transform="translate(-399.775 -183.487)"
                    ></path>
                    <path
                      id="Path_133458"
                      data-name="Path 133458"
                      d="M478.736,187.883h-2.62v-.78h2.066v-1.4h-2.066v-.711h2.62v-1.5h-4.328v5.894h4.328Z"
                      transform="translate(-419.176 -183.487)"
                    ></path>
                    <path
                      id="Path_133459"
                      data-name="Path 133459"
                      d="M292.761,186.74a2.772,2.772,0,0,0,2.76,2.957,3.285,3.285,0,0,0,2.164-.841l-.694-1.449a2.315,2.315,0,0,1-1.306.662c-.664,0-1.038-.421-1.078-1.333.041-.911.415-1.333,1.078-1.333a2.315,2.315,0,0,1,1.306.662l.694-1.449a3.285,3.285,0,0,0-2.164-.841,2.772,2.772,0,0,0-2.76,2.957h0v.008Z"
                      transform="translate(-274.893 -183.714)"
                    ></path>
                    <path
                      id="Path_133460"
                      data-name="Path 133460"
                      d="M506.607,186.677a.388.388,0,0,0,.144-.192.429.429,0,0,0,.021-.14.471.471,0,0,0-.032-.174.4.4,0,0,0-.094-.142.459.459,0,0,0-.15-.1.525.525,0,0,0-.2-.036h-.574v1.465h.286v-.584h.206l.286.584h.331l-.327-.632a.4.4,0,0,0,.1-.052m-.177-.194a.212.212,0,0,1-.151.053h-.27v-.385h.27a.213.213,0,0,1,.151.053.2.2,0,0,1,0,.278"
                      transform="translate(-444.049 -185.399)"
                    ></path>
                    <path
                      id="Path_133461"
                      data-name="Path 133461"
                      d="M503.671,183.481a1.229,1.229,0,1,0,1.229,1.229,1.231,1.231,0,0,0-1.229-1.229m0,2.319a1.09,1.09,0,1,1,1.09-1.09,1.091,1.091,0,0,1-1.09,1.09"
                      transform="translate(-441.442 -183.481)"
                    ></path>
                    <path
                      id="Path_133462"
                      data-name="Path 133462"
                      d="M403.407,255.727a8.558,8.558,0,0,0-.94-2.13A10.756,10.756,0,0,0,401,251.718a7.842,7.842,0,0,0-1.856-1.421,9.044,9.044,0,0,0,2.383-3.116,8.755,8.755,0,0,0,.825-3.712,9.107,9.107,0,0,0-.6-3.23,8.689,8.689,0,0,0-1.787-2.864,7.79,7.79,0,0,0-1.535-1.329,11.672,11.672,0,0,0-1.925-1.031c-.052-.022-.1-.042-.157-.062h0l-.015-.006-.02-.008h0l-.343-.129-.27.239h0l-.034.029-7.078,6.1h1.342a3.317,3.317,0,0,1,2.291.864,2.711,2.711,0,0,1,.962,2.092,2.779,2.779,0,0,1-.962,2.115,3.264,3.264,0,0,1-2.291.887h-1.971v-5.415l-9.486,8.175v1.542l9.212,8.236v-6.168h2.52a3.633,3.633,0,0,1,2.566.979,3.133,3.133,0,0,1,0,4.687,3.632,3.632,0,0,1-2.566.978h-1.987l7.28,6.509.433.389.143-.033.039-.009a9.369,9.369,0,0,0,1.607-.511,10.625,10.625,0,0,0,3.139-2.016,9.029,9.029,0,0,0,2.108-2.956,8.785,8.785,0,0,0,.756-3.62,7.938,7.938,0,0,0-.32-2.177"
                      transform="translate(-342.978 -224.252)"
                      fill="#ffbe00"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          {/* search bar */}
          <div className="flex-1 hidden md:block max-w-[720px]">
            <Form {...form}>
              <form
                onSubmit={form.handleSubmit(onSubmit)}
                className="relative "
              >
                <FormField
                  control={form.control}
                  name="search"
                  render={({ field }) => (
                    <FormItem>
                      <svg
                        id="_Trailing_Icon"
                        data-name="??Trailing Icon"
                        className="absolute top-[50%] left-3 translate-y-[-50%]"
                        xmlns="http://www.w3.org/2000/svg"
                        width="18.832"
                        height="18.83"
                        viewBox="0 0 18.832 18.83"
                      >
                        <rect
                          id="Boundary"
                          width="18"
                          height="18"
                          fill="none"
                        ></rect>
                        <path
                          id="Union_2"
                          data-name="Union 2"
                          d="M16.646,17.658l-4.59-4.591c.007,0,1.008-1.01,1.011-1.01l4.591,4.589a.716.716,0,0,1-.544,1.184A.724.724,0,0,1,16.646,17.658ZM6.626,14.3a7.136,7.136,0,1,1,6.084-2.6L11.7,12.709a7.174,7.174,0,0,1-4.526,1.609C6.99,14.318,6.807,14.31,6.626,14.3ZM4.282,2.191A5.734,5.734,0,1,0,7.155,1.42,5.738,5.738,0,0,0,4.282,2.191ZM2.5,7.779a.717.717,0,0,1-.359-.621,5.023,5.023,0,0,1,5.02-5.02.717.717,0,1,1,0,1.434A3.586,3.586,0,0,0,3.573,7.157a.716.716,0,0,1-.36.621.705.705,0,0,1-.359.1A.714.714,0,0,1,2.5,7.779Z"
                          transform="translate(1.001 1.001)"
                          fill="#414c58"
                        ></path>
                      </svg>
                      <FormControl>
                        <Input
                          placeholder="Type a product name e.g. Biozyme."
                          {...field}
                          className="pl-10 bg-[#dbdde8] placeholder:text-[#757575] tracking-wide leading-[26px] h-[48px]"
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
              </form>
            </Form>
          </div>
          {/* right side icons */}
          <div className="flex pl-12 flex-row items-center gap-8 justify-center">
            {/* second icon */}
            <div className=" duration-300 hover:scale-105 transition-all cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="32.2"
                height="32"
                viewBox="0 0 32.2 32"
              >
                <g
                  id="Group_98669"
                  data-name="Group 98669"
                  transform="translate(-293 -46)"
                >
                  <path
                    id="Path_101712"
                    data-name="Path 101712"
                    d="M55.1,12.1l2.109-.1a1.053,1.053,0,0,0,.734-.993V8.231H35.2a.837.837,0,0,1-.825-.794.858.858,0,0,1,.825-.893h4.219L42.35,5.055H33.912A1.062,1.062,0,0,0,32.9,6.147V27.193a1.062,1.062,0,0,0,1.009,1.092H56.933a1.062,1.062,0,0,0,1.009-1.092V22.329a1.062,1.062,0,0,0-1.009-1.092H53.815a2.6,2.6,0,0,1-2.476-2.78V14.784c0-2.482,1.926-2.681,3.76-2.681ZM42.992,6.544H53.081l-1.926-4.17-8.163,4.17Zm11.831,0h3.118v-.4a1.062,1.062,0,0,0-1.009-1.092H54.089l.734,1.489ZM53.356,3.367h3.577a2.665,2.665,0,0,1,2.476,2.78v4.865a2.294,2.294,0,0,1-.183,1.092h.55a2.648,2.648,0,0,1,2.568,2.681v3.673a2.739,2.739,0,0,1-2.568,2.78h-.55a2.1,2.1,0,0,1,.183,1.092v4.865a2.574,2.574,0,0,1-2.476,2.681H33.912a2.648,2.648,0,0,1-2.568-2.681V6.147a2.739,2.739,0,0,1,2.568-2.78H45.56L51.246.488a.747.747,0,0,1,1.009.4l1.1,2.482Zm6.42,10.424H53.814a.9.9,0,0,0-.917.993v3.673a.992.992,0,0,0,.917,1.092h5.962a1.062,1.062,0,0,0,1.009-1.092V14.784a.976.976,0,0,0-1.009-.993Z"
                    transform="translate(262.656 46.59)"
                    fill="#20262e"
                    stroke="#20262e"
                    strokeWidth="0.4"
                  ></path>
                  <path
                    id="Path_101713"
                    data-name="Path 101713"
                    d="M508.376,285.658a.94.94,0,1,1-.94-.94.94.94,0,0,1,.94.94"
                    transform="translate(-188.906 -222.507)"
                    fill="#20262e"
                    stroke="#20262e"
                    strokeWidth="0.4"
                    fillRule="evenodd"
                  ></path>
                  <g id="notifications_24px" transform="translate(293 46)">
                    <g id="Group_96359" data-name="Group 96359">
                      <rect
                        id="Boundary"
                        width="32"
                        height="32"
                        fill="none"
                      ></rect>
                    </g>
                  </g>
                </g>
              </svg>
            </div>

            {/* third icon */}
            <div className="relative duration-300 hover:scale-105 transition-all cursor-pointer">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="32"
                height="32"
              >
                <g
                  id="Group_98668"
                  data-name="Group 98668"
                  transform="translate(-293 -46)"
                >
                  <path
                    id="Path_144433"
                    data-name="Path 144433"
                    d="M129.945,33.711h11.074l-1.984-19.157h-3.466v3.88a.9.9,0,0,1-1.793,0v-3.88h-7.663v3.88a.9.9,0,0,1-1.793,0v-3.88h-3.465L118.87,33.711Zm-5.624-20.865V11.624a5.219,5.219,0,0,1,1.652-3.785,5.8,5.8,0,0,1,7.946,0,5.219,5.219,0,0,1,1.652,3.785v1.222h4.275v0a.879.879,0,0,1,.889.768l2.154,20.8a.811.811,0,0,1,.014.152.876.876,0,0,1-.9.854h-24.12v0c-.029,0-.058,0-.088,0a.865.865,0,0,1-.8-.931l2.155-20.8a.877.877,0,0,1,.9-.836h4.275Zm9.455,0V11.624a3.551,3.551,0,0,0-1.126-2.577,3.946,3.946,0,0,0-5.41,0,3.558,3.558,0,0,0-1.126,2.577v1.222h7.663Z"
                    transform="translate(178.736 41.035)"
                    fill="#20262e"
                    stroke="#20262e"
                    strokeWidth="0.4"
                  ></path>
                  <g id="notifications_24px" transform="translate(293 46)">
                    <g id="Group_96359" data-name="Group 96359">
                      <rect
                        id="Boundary"
                        fill="none"
                        width="32"
                        height="32"
                      ></rect>
                    </g>
                  </g>
                </g>
              </svg>
              <div className="absolute left-5 w-5 h-5 flex items-center justify-center rounded-full bg-[#ffbe00] top-5">
                <span className="text-black text-[12px]">0</span>
              </div>
            </div>

            {/* button */}
            <Button
              className="bg-[#ffbe00] hover:bg-[#ffbe00] px-7 duration-300 transition-all hover:scale-105 text-black font-bold"
              variant="default"
            >
              Login/Sign Up
            </Button>
          </div>
        </div>

        {/* mobile screen */}
        <div className="flex flex-row   md:hidden    items-center justify-between">
          {/* side bar and logo */}
          <div className="flex flex-row  gap-3 items-center justify-center">
            {/* <RxHamburgerMenu className="w-5 h-5" /> */}
            <Sidebar />
            {/* mobile logo */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="33.412"
              height="22.619"
              viewBox="0 0 33.412 22.619"
            >
              <g
                id="Group_95390"
                data-name="Group 95390"
                transform="translate(-205.604 -183.48)"
              >
                <path
                  id="Path_133446"
                  data-name="Path 133446"
                  d="M213.824,235.232l-3.157-4.242H205.6v17.475h5.062v-9.039l3.157,4.266,3.206-4.266v9.039h5.062V230.99h-5.062Z"
                  transform="translate(0 -42.37)"
                ></path>
                <g
                  id="Group_95382"
                  data-name="Group 95382"
                  transform="translate(205.636 183.48)"
                >
                  <g
                    id="Group_95389"
                    data-name="Group 95389"
                    transform="translate(0 0)"
                  >
                    <path
                      id="Path_133447"
                      data-name="Path 133447"
                      d="M376.478,231.24v7.936l8.947-7.71c-.117-.034-.235-.067-.354-.094a4.818,4.818,0,0,0-1.1-.132Z"
                      transform="translate(-358.021 -226.072)"
                    ></path>
                    <path
                      id="Path_133448"
                      data-name="Path 133448"
                      d="M376.478,327.149h8.316q.269,0,.528-.025l-8.844-7.907Z"
                      transform="translate(-358.021 -304.53)"
                    ></path>
                    <path
                      id="Path_133449"
                      data-name="Path 133449"
                      d="M206.842,185l.611.894h.151l.611-.894v1.587h.941v-3.1h-.833l-.795,1.112-.795-1.112H205.9v3.1h.941Z"
                      transform="translate(-205.901 -183.488)"
                    ></path>
                    <path
                      id="Path_133450"
                      data-name="Path 133450"
                      d="M242.641,186.635a1.2,1.2,0,0,0,1.336-1.318v-1.828h-.941v1.769c0,.388-.113.547-.4.547s-.386-.155-.386-.547v-1.769h-.941v1.828a1.178,1.178,0,0,0,1.326,1.318"
                      transform="translate(-237.483 -183.488)"
                    ></path>
                    <path
                      id="Path_133451"
                      data-name="Path 133451"
                      d="M270.551,185.3l.386.135c.155.054.207.122.207.211,0,.149-.118.225-.3.225a1.323,1.323,0,0,1-.687-.247l-.212.774a2.493,2.493,0,0,0,1.016.225,1.024,1.024,0,0,0,1.148-1.022c0-.4-.207-.657-.72-.846L271,184.61a.2.2,0,0,1-.16-.2c0-.122.094-.2.273-.2a1.506,1.506,0,0,1,.706.216l.254-.747a2.412,2.412,0,0,0-1-.2,1.028,1.028,0,0,0-1.167.99.81.81,0,0,0,.644.833"
                      transform="translate(-262.981 -183.48)"
                    ></path>
                    <path
                      id="Path_133452"
                      data-name="Path 133452"
                      d="M322.438,185.8h-1.227v-2.312h-.941v3.1h2.168Z"
                      transform="translate(-307.895 -183.488)"
                    ></path>
                    <path
                      id="Path_133453"
                      data-name="Path 133453"
                      d="M344.146,186.589h2.276V185.8h-1.378v-.41h1.087v-.739h-1.087v-.374h1.378v-.789h-2.276Z"
                      transform="translate(-329.187 -183.488)"
                    ></path>
                    <path
                      id="Path_133454"
                      data-name="Path 133454"
                      d="M372.383,185.731a.715.715,0,0,0-.541-.761.69.69,0,0,0,.325-.634c0-.579-.353-.848-1-.848H369.8v3.1h1.552c.658,0,1.03-.324,1.03-.857m-1.641-1.559h.249c.165,0,.23.1.23.246s-.061.251-.235.251h-.244Zm.423,1.733h-.423v-.538h.409c.184,0,.254.114.254.274a.232.232,0,0,1-.24.264"
                      transform="translate(-352.067 -183.487)"
                    ></path>
                    <path
                      id="Path_133455"
                      data-name="Path 133455"
                      d="M398.656,185.8h-1.227v-2.312h-.941v3.1h2.168Z"
                      transform="translate(-375.866 -183.488)"
                    ></path>
                    <path
                      id="Path_133456"
                      data-name="Path 133456"
                      d="M420.453,186.078h.922l.132.511h.936l-.978-3.1h-1.1l-.974,3.1h.931Zm.466-1.692.235,1.026h-.475Z"
                      transform="translate(-396.294 -183.487)"
                    ></path>
                    <path
                      id="Path_133457"
                      data-name="Path 133457"
                      d="M452.25,185.8h-1.058l1.058-1.687v-.625h-2.267v.789h1.072l-1.072,1.687v.624h2.267Z"
                      transform="translate(-423.573 -183.488)"
                    ></path>
                    <path
                      id="Path_133458"
                      data-name="Path 133458"
                      d="M476.685,185.8h-1.378v-.41h1.086v-.739h-1.086v-.374h1.378v-.789h-2.276v3.1h2.276Z"
                      transform="translate(-445.356 -183.488)"
                    ></path>
                    <path
                      id="Path_133459"
                      data-name="Path 133459"
                      d="M292.76,185.335a1.458,1.458,0,0,0,1.452,1.555,1.728,1.728,0,0,0,1.138-.442l-.365-.762a1.218,1.218,0,0,1-.687.348c-.349,0-.546-.222-.567-.7.021-.479.218-.7.567-.7a1.218,1.218,0,0,1,.687.348l.365-.762a1.728,1.728,0,0,0-1.138-.442,1.458,1.458,0,0,0-1.452,1.555h0v0Z"
                      transform="translate(-283.362 -183.743)"
                    ></path>
                    <path
                      id="Path_133460"
                      data-name="Path 133460"
                      d="M506.188,186.307a.2.2,0,0,0,.076-.1.226.226,0,0,0,.011-.074.248.248,0,0,0-.017-.091.213.213,0,0,0-.049-.075.242.242,0,0,0-.079-.051.276.276,0,0,0-.1-.019h-.3v.771h.15v-.307h.108l.15.307h.174l-.172-.332a.21.21,0,0,0,.054-.028m-.093-.1a.112.112,0,0,1-.08.028h-.142v-.2h.142a.112.112,0,0,1,.08.028.1.1,0,0,1,0,.146"
                      transform="translate(-473.281 -185.635)"
                    ></path>
                    <path
                      id="Path_133461"
                      data-name="Path 133461"
                      d="M503.088,183.481a.647.647,0,1,0,.647.647.647.647,0,0,0-.647-.647m0,1.22a.573.573,0,1,1,.573-.573.574.574,0,0,1-.573.573"
                      transform="translate(-470.355 -183.481)"
                    ></path>
                    <path
                      id="Path_133462"
                      data-name="Path 133462"
                      d="M391.591,245.813a4.5,4.5,0,0,0-.494-1.121,5.657,5.657,0,0,0-.771-.988,4.125,4.125,0,0,0-.976-.747,4.757,4.757,0,0,0,1.253-1.639,4.605,4.605,0,0,0,.434-1.953,4.791,4.791,0,0,0-.313-1.7,4.57,4.57,0,0,0-.94-1.507,4.1,4.1,0,0,0-.808-.7,6.136,6.136,0,0,0-1.013-.542l-.083-.033h0l-.008,0-.01,0h0l-.18-.068-.142.126h0l-.018.015-3.723,3.208h.706a1.745,1.745,0,0,1,1.205.454,1.426,1.426,0,0,1,.506,1.1,1.462,1.462,0,0,1-.506,1.112,1.717,1.717,0,0,1-1.205.467h-1.037v-2.849l-4.99,4.3v.811l4.845,4.332v-3.244h1.326a1.911,1.911,0,0,1,1.35.515,1.648,1.648,0,0,1,0,2.466,1.911,1.911,0,0,1-1.35.515H383.6l3.829,3.424.228.2.075-.017.02,0a4.929,4.929,0,0,0,.845-.269,5.589,5.589,0,0,0,1.651-1.061,4.75,4.75,0,0,0,1.109-1.555,4.621,4.621,0,0,0,.4-1.9,4.176,4.176,0,0,0-.169-1.145"
                      transform="translate(-359.805 -229.257)"
                      fill="#ffbe00"
                    ></path>
                  </g>
                </g>
              </g>
            </svg>
          </div>
          {/* mobile icons */}
          <div className="flex flex-row gap-5 items-center justify-center">
            {/* first icon */}
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 32.2 32"
            >
              <g
                id="Group_98669"
                data-name="Group 98669"
                transform="translate(-293 -46)"
              >
                <path
                  id="Path_101712"
                  data-name="Path 101712"
                  d="M55.1,12.1l2.109-.1a1.053,1.053,0,0,0,.734-.993V8.231H35.2a.837.837,0,0,1-.825-.794.858.858,0,0,1,.825-.893h4.219L42.35,5.055H33.912A1.062,1.062,0,0,0,32.9,6.147V27.193a1.062,1.062,0,0,0,1.009,1.092H56.933a1.062,1.062,0,0,0,1.009-1.092V22.329a1.062,1.062,0,0,0-1.009-1.092H53.815a2.6,2.6,0,0,1-2.476-2.78V14.784c0-2.482,1.926-2.681,3.76-2.681ZM42.992,6.544H53.081l-1.926-4.17-8.163,4.17Zm11.831,0h3.118v-.4a1.062,1.062,0,0,0-1.009-1.092H54.089l.734,1.489ZM53.356,3.367h3.577a2.665,2.665,0,0,1,2.476,2.78v4.865a2.294,2.294,0,0,1-.183,1.092h.55a2.648,2.648,0,0,1,2.568,2.681v3.673a2.739,2.739,0,0,1-2.568,2.78h-.55a2.1,2.1,0,0,1,.183,1.092v4.865a2.574,2.574,0,0,1-2.476,2.681H33.912a2.648,2.648,0,0,1-2.568-2.681V6.147a2.739,2.739,0,0,1,2.568-2.78H45.56L51.246.488a.747.747,0,0,1,1.009.4l1.1,2.482Zm6.42,10.424H53.814a.9.9,0,0,0-.917.993v3.673a.992.992,0,0,0,.917,1.092h5.962a1.062,1.062,0,0,0,1.009-1.092V14.784a.976.976,0,0,0-1.009-.993Z"
                  transform="translate(262.656 46.59)"
                  fill="#20262e"
                  stroke="#20262e"
                  strokeWidth="0.4"
                ></path>
                <path
                  id="Path_101713"
                  data-name="Path 101713"
                  d="M508.376,285.658a.94.94,0,1,1-.94-.94.94.94,0,0,1,.94.94"
                  transform="translate(-188.906 -222.507)"
                  fill="#20262e"
                  stroke="#20262e"
                  strokeWidth="0.4"
                  fillRule="evenodd"
                ></path>
                <g id="notifications_24px" transform="translate(293 46)">
                  <g id="Group_96359" data-name="Group 96359">
                    <rect
                      id="Boundary"
                      width="32"
                      height="32"
                      fill="none"
                    ></rect>
                  </g>
                </g>
              </g>
            </svg>
            {/* second icon */}
            <div className="relative">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 32 32"
                width="24"
                height="24"
              >
                <g
                  id="Group_98668"
                  data-name="Group 98668"
                  transform="translate(-293 -46)"
                >
                  <path
                    id="Path_144433"
                    data-name="Path 144433"
                    d="M129.945,33.711h11.074l-1.984-19.157h-3.466v3.88a.9.9,0,0,1-1.793,0v-3.88h-7.663v3.88a.9.9,0,0,1-1.793,0v-3.88h-3.465L118.87,33.711Zm-5.624-20.865V11.624a5.219,5.219,0,0,1,1.652-3.785,5.8,5.8,0,0,1,7.946,0,5.219,5.219,0,0,1,1.652,3.785v1.222h4.275v0a.879.879,0,0,1,.889.768l2.154,20.8a.811.811,0,0,1,.014.152.876.876,0,0,1-.9.854h-24.12v0c-.029,0-.058,0-.088,0a.865.865,0,0,1-.8-.931l2.155-20.8a.877.877,0,0,1,.9-.836h4.275Zm9.455,0V11.624a3.551,3.551,0,0,0-1.126-2.577,3.946,3.946,0,0,0-5.41,0,3.558,3.558,0,0,0-1.126,2.577v1.222h7.663Z"
                    transform="translate(178.736 41.035)"
                    fill="#20262e"
                    stroke="#20262e"
                    strokeWidth="0.4"
                  ></path>
                  <g id="notifications_24px" transform="translate(293 46)">
                    <g id="Group_96359" data-name="Group 96359">
                      <rect
                        id="Boundary"
                        fill="none"
                        width="24"
                        height="24"
                      ></rect>
                    </g>
                  </g>
                </g>
              </svg>
              <div className="absolute left-4 w-5 h-5 flex items-center justify-center rounded-full bg-[#ffbe00] top-3">
                <span className="text-black font-light text-[12px]">0</span>
              </div>
            </div>
          </div>
        </div>

        {/* mobile search bar */}
        <div className="flex-1 block md:hidden max-w-[720px]">
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className="relative ">
              <FormField
                control={form.control}
                name="search"
                render={({ field }) => (
                  <FormItem>
                    <svg
                      id="_Trailing_Icon"
                      data-name="??Trailing Icon"
                      className="absolute top-[50%] left-3 translate-y-[-50%]"
                      xmlns="http://www.w3.org/2000/svg"
                      width="18.832"
                      height="18.83"
                      viewBox="0 0 18.832 18.83"
                    >
                      <rect
                        id="Boundary"
                        width="18"
                        height="18"
                        fill="none"
                      ></rect>
                      <path
                        id="Union_2"
                        data-name="Union 2"
                        d="M16.646,17.658l-4.59-4.591c.007,0,1.008-1.01,1.011-1.01l4.591,4.589a.716.716,0,0,1-.544,1.184A.724.724,0,0,1,16.646,17.658ZM6.626,14.3a7.136,7.136,0,1,1,6.084-2.6L11.7,12.709a7.174,7.174,0,0,1-4.526,1.609C6.99,14.318,6.807,14.31,6.626,14.3ZM4.282,2.191A5.734,5.734,0,1,0,7.155,1.42,5.738,5.738,0,0,0,4.282,2.191ZM2.5,7.779a.717.717,0,0,1-.359-.621,5.023,5.023,0,0,1,5.02-5.02.717.717,0,1,1,0,1.434A3.586,3.586,0,0,0,3.573,7.157a.716.716,0,0,1-.36.621.705.705,0,0,1-.359.1A.714.714,0,0,1,2.5,7.779Z"
                        transform="translate(1.001 1.001)"
                        fill="#414c58"
                      ></path>
                    </svg>
                    <FormControl>
                      <Input
                        placeholder="Type a product name e.g. Biozyme."
                        {...field}
                        className="pl-10 bg-[#e8e9ea] placeholder:text-[#757575] tracking-wide leading-[26px] h-[48px]"
                      />
                    </FormControl>
                    <FormMessage />
                  </FormItem>
                )}
              />
            </form>
          </Form>
        </div>
      </div>
    </>
  );
};

export default Navbar;
