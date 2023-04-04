import React, {useState} from 'react';


interface DataProps {
    data?: any[];
    dataText?: any[];
    initialItems: number;
    loadMoreItems: number
}

const TableLoadMore = (props: DataProps) => {

    const [items, setItems] = useState((props.data ? props.data : props.dataText)?.slice(0, props.initialItems) || []);

    const loadMore = () => {
        const newItems = (props.data ? props.data : props.dataText)?.slice(
            items?.length,
            (items?.length || 0) + props.loadMoreItems
        ) ?? [];
        setItems([...items, ...newItems]);
    }


    return (
        <div className="load-more">
            {props.data && props.data.length && (
                <div className="load-more-list">
                    {items && items.map((value: any, index: number) => (
                        <React.Fragment key={index}>
                            <div className="load-more-list-item mb-1">
                                <div className="load-more-list-item-inner">
                                    <img src={value?.img} alt={value?.time}
                                         className="load-more-list-item-inner-images"/>
                                    <p className="load-more-list-item-inner-time color-light">
                                        <span className="txt-time-item">{value?.time}</span>
                                    </p>
                                </div>
                                <p className="xt-exercise-title">{value?.content}</p>
                                <p>
                                    {value?.tags && value?.tags.map((i: any, index: number) => (
                                        <a className="color-primary-400 mr-1 txt-tags cursor-pt" key={index}>{i}</a>
                                    ))}
                                </p>
                            </div>

                        </React.Fragment>
                    ))}
                </div>
            )}
            {props.dataText && props.dataText.length && (
                <div className="load-more-text">
                    {items && items.map((value: any, index: number) => (
                        <div className="load-more-text-item pd-2" key={index}>
                            <p className="txt-exercise-calo">{value?.year}</p>
                            <p className="txt-exercise-calo pb-1">{value?.time}</p>
                            <p className="txt_diary">{value?.textTitle}</p>
                            <p className="txt_diary">{value?.textContent}</p>
                        </div>
                    ))}
                </div>
            )}

            {items && items.length > 0 && items.length < ((props.data ? props.data : props.dataText)!.length) && (
                <button onClick={loadMore} className="btn btn-primary my-5">
                    {props.data ? '記録をもっと見る' : '自分の日記をもっと見る'}
                </button>
            )}
        </div>
    );
};

export default TableLoadMore;
