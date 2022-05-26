import { Component } from './component.js';
import { series } from './data.js';
export class View extends Component {
    constructor(public selector: string) {
        super();
        this.template = this.createTemplate();
        this.render(selector);
        this.manageComponent();
    }
    createTemplate() {
        let html = '';
        let view = [];
        view = series.filter((item) => item.watched !== false);

        view.forEach((item) => {
            html += `
            <li class="serie">
                <img
                    class="serie__poster"
                    src="${item.poster}"
                    alt="${item.name} poster"
                />
                <h4 class="serie__title">${item.name}</h4>
                <p class="serie__info"${item.creator} ${item.year}</p>
                <ul class="score">
                    <li class="score__star">
                        <i
                            class="icon-score far fa-star"
                            title="1/5"
                        ></i>
                    </li>
                    <li class="score__star">
                        <i
                            class="icon-score far fa-star"
                            title="2/5"
                        ></i>
                    </li>
                    <li class="score__star">
                        <i
                            class="icon-score far fa-star"
                            title="3/5"
                        ></i>
                    </li>
                    <li class="score__star">
                        <i
                            class="icon-score far fa-star"
                            title="4/5"
                        ></i>
                    </li>
                    <li class="score__star">
                        <i
                            class="icon-score far fa-star"
                            title="5/5"
                        ></i>
                    </li>
                </ul>
                <i class="fas fa-times-circle icon--delete delete_view" id="${item.id}"></i>
            </li>`;
        });
        return html;
    }
    private manageComponent() {
        document
            .querySelectorAll('.delete_view')
            .forEach((item) =>
                item.addEventListener('click', this.handlerButton.bind(this))
            );
    }
    protected handlerButton(ev: Event) {
        const deletedId = Number((<HTMLElement>ev.target).id);
        console.log('click', deletedId);
        series.filter((item) => item.id !== deletedId);
    }
}
