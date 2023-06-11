import argparse

from recbole_gnn.quick_start import run_recbole_gnn


if __name__ == '__main__':
    parser = argparse.ArgumentParser()
    parser.add_argument('--model', '-m', type=str, default='SimGCL', help='name of models') # D:\RecBole\recbole_gnn\model\sequential_recommender\__init__.py
    parser.add_argument('--dataset', '-d', type=str, default='ml-100k', help='name of datasets')
    # parser.add_argument('--dataset', '-d', type=str, default='yelp2022', help='name of datasets')
    parser.add_argument('--config_files', type=str, default=None, help='config files')
    config_dict = {
            'load_col': {
            'inter': ['user_id', 'item_id', 'rating', 'timestamp'], 
            # 'user': ['user_id', 'flavor','dislike'], 
            # 'item': ['item_id', 'flavor'],
            },
            "LABEL_FIELD":"rating",
            # "neg_sampling": None,
            "threshold": {"rating": 3},
            # "train_neg_sample_args": None,
            # "user_inter_num_interval": None,
            # "item_inter_num_interval": None,
            # "eval_neg_sample_args": None,

        }
    args, _ = parser.parse_known_args()

    config_file_list = args.config_files.strip().split(' ') if args.config_files else None
    run_recbole_gnn(model=args.model, dataset=args.dataset, config_file_list=config_file_list, config_dict=config_dict)
