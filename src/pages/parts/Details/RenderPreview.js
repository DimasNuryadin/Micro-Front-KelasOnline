import Accordion, { IconLock, IconPlay, Item } from "@/src/components/Accordion";
import Modal from "@/src/components/Modal";
import React from 'react';
import YouTube from "react-youtube";

import propTypes from 'prop-types';

RenderPreview.propTypes = {
  previews: propTypes.array
}

export default function RenderPreview({ previews }) {
  return (
    <div className="accordion">
      <Accordion>
        {(active, toggle) => {
          return previews?.map((item, index) => {
            return (
              <Item id={item.id} name={item.name} child={item.lessons} active={active} toggle={toggle} key={`${index}-${item.id}`} >
                {
                  item?.lessons?.length > 0 && item.lessons.map((child, index2) => {
                    return (
                      <div key={`${index2}-${child.id}`} className="relative hover:bg-gray-200 flex justify-between items-center pl-8 pr-4 py-2">
                        <span className="text-gray-600">
                          {child?.name ?? "Course name"}
                        </span>
                        {
                          index2 === 0 &&
                          <Modal content={(toggleModal) => <YouTube videoId={child?.video} id={child?.video} opts={{
                            playerVars: {
                              autoplay: 1, controls: 1, showinfo: 1
                            }
                          }}
                          />}>
                            {
                              (toggleModal) => <span className="link-wrapped" onClick={toggleModal} role="presentation"></span>
                            }
                          </Modal>
                        }
                        {index2 === 0 && <IconPlay className="fill-teal-500" />}
                        {index2 !== 0 && <IconLock />}
                      </div>
                    )
                  })
                }
              </Item>
            )
          })
        }}
      </Accordion>
    </div>
  )
}
